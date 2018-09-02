# How To Insert Data To Database Using Axios in Laravel 5.7

1. Go to the User.php and create fillable
2. Go to the UserController and create store function

Step 1:

In User.php we have to create a fillable, that means the values are allows to inserted to the users table

So add or change if existed the fillable to this

~~~~

    protected $fillable = [
        'name', 'email', 'password', 'bio', 'photo', 'type'
    ];

~~~~

Step 2:

Create a store function in UserController to add the new user

So add those lines,

~~~~

First import the required namespaces to use User & Hash

use App\User;
use Illuminate\Support\Facades\Hash;

... Then create store function

    public function store(Request $request)
    {
        //
        return User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'type' => $request['type'],
            'bio' => $request['bio'],
            'photo' => $request['photo'],
            'password' => Hash::make($request['password'])
        ]);
    }

~~~~

1. Users.vue - [Link](../resources/assets/js/components/Users.vue)
2. Users.php - [Link](../app/User.php)
3. UserController.php - [Link](../app/Http/Controllers/API/UserController.php)





