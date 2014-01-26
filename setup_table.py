import sqlite3

def main():
    db_name = 'test.db'

    def create_table():
        conn = sqlite3.connect(db_name)
        c = conn.cursor()
        c.execute('''create table courses (dept text, number integer, name text, dist text)''')
        c.execute('''create table ratings (dept text, number integer,
            semester text, teacher text, rating text,
            workload text, time text, crn text)''')
        conn.commit()
        conn.close()

    def clean_table():
        conn = sqlite3.connect(db_name)
        c = conn.cursor()
        try:
            c.execute("drop table courses")
        except:
            pass
        try:
            c.execute("drop table ratings")
        except:
            pass
        conn.commit()
        conn.close()

    def check_table():
        conn = sqlite3.connect(db_name)
        c = conn.cursor()
        try:
            results = list(c.execute("select * from courses"))
        except:
            results = []
        conn.commit()
        conn.close()
        
        if len(results) != 0:
            print "WARNING: Table contains data"
            i = raw_input("Continue (y/n)? >>> ")
            if i != "y":
                import sys
                sys.exit(0)
            clean_table()
        else:
            clean_table()
        create_table()

    check_table()

    course_data = "course_data.txt"
    with open(course_data, "r") as f:
        for line in f:
            
            tup = tuple(line.replace('\n', '').split("~"))
            assert len(tup) == 4

            def insert_row(tup):
                conn = sqlite3.connect(db_name)
                c = conn.cursor()
                c.execute("insert into courses values ('%s', '%s', '%s', '%s')" % tup)
                conn.commit()
                conn.close()

            insert_row(tup)

if __name__ == '__main__':
    main()