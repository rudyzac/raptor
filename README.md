# Raptor
```
                                                    -- __
                                                  ~ (@)  ~~~---_
                                                {     `-_~=======)
                                                {    (_  ',
                                                 ~    . = _',
                                                  ~    '.  =-'
                                                    ~     :
.                                                -~     ("");
 '.                                         --~        \  \ ;
   ".-_                                   -~            \  \;      _-====
      -~- _                          -~                 {  "---- _'-====
        ~- _~-  _              _ -~                     ~---------==.=`
             ~-  ~~-----~~~~~~       .+++~~~~~~~~-__   /
                 ~-   __            {   -     +   }   /
                          ~- ______{_    _ -=\ / /_ ~
                              :      ~--~    // /         ..-
                              :   / /      // /         ((
                              :  / /      {   `-------=. ))
                              :   /        '"=--------. }o
                 .=._________,'  )                     ))
                 )  _________ -''                     ~~
                / /  _ _                   =
               (_.-.'O'-'.
```

## Postgres dev db secrets
Sensitive configuration information is not committed into source control, even when it's for the dev environment.

The first time you run the app, before invoking `docker-compose up` create a `postgres.env` file in the root folder of the project.

Inside it, copy and paste the contents of `dummy_postgres.env` and fill it in with your login details. 
NB: values must be between quotes.
