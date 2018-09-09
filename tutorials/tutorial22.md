# How to Install JWT For Laravel API Authentication?

In the Laravel Passport its very easy to use & implement JWT.

Step 1: Go to the Kernel.php and add the required middleware for JWT as follows:

~~~~

        'web' => [
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            // \Illuminate\Session\Middleware\AuthenticateSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \App\Http\Middleware\VerifyCsrfToken::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
            \Laravel\Passport\Http\Middleware\CreateFreshApiToken::class, //this is the required middleware
        ],

~~~~

Step 2: To make sure that the only authorized people can acess to the api we need to add the middleware to the controller as well.

We need guard the UserController so thats why we will add the following lines.

~~~~

    public function __construct() {
        $this->middleware('auth:api');
    }
~~~~

Having done so, no one can access to the api if not authorized.