# How to Validate Api in Server Side?

1. Go to the UserController.php and add Validation

Step 1:

Now lets go to the UserController.php and add those lines just before the return ...

~~~~

        $this->validate($request, [
            'name' => 'required|string|max:191',
            'email' => 'required|string|email|max:191|unique:users',
            'password' => 'required|string|min:8'
        ]);

~~~~

Basically this process will check if the name, email and password is submitted. Because all of them are required fields and also this validation will check if their types are string or not, maximum characters and very important which is for the email field. Because this validation will check if the submitted email is existed or not in the database..

UserController.php - [Link](../app/Http/Controllers/API/UserController.php)