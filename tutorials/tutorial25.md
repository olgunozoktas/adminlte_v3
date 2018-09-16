# Submit Base64 String to Server

In this tutorial, we will learn how to submit Base64 String to the Server

Step 1: Go and create click event on the submit button

To the Update button lets add the following VueJs @click event.

~~~~

<button @click.prevent="updateInfo" type="submit" class="btn btn-success">Update</button>

~~~~

Whenever the user clicks this button, @click.prevent (click event) will prevent automatically the page to submit the form. Instead it will call **updateInfo** function which we are going to create in the next step.

Step 2: Create **updateInfo** function.

To create the following function we have to go to the methods object in the script and add the following line.

~~~~

            updateInfo() {
                this.form.put('api/profile/')
                .then(() => {

                })
                .catch(() => {
                    
                })
            },
~~~~

Here we could use axios method but instead we have used **this.form.put** because as you remember we have installed a VForm component and it allow us to use this way as well.

Basically, whenever this function is called, then it will send a **PUT** request to the 'api/profile' route with all the form informations.

Step 3: Lets Create this Route update User Information

To create the router we have to go to the api.php in the routes folder.
Then add the following line.

~~~~

Route::put('profile', 'API\UserController@updateProfile');

~~~~

Whenever this route is called, then the request is going to redirected to the updateProfile() function in the UserController.php

Step 4: Lets have create updateProfile() function inside the UserController.php to update the user information.

~~~~

public function updateProfile(Request $request){
	
	$user = auth('api')->user();

	return $request->photo;
}

~~~~

Whenever a request is directed to this function and its called then it will get the user information fro the auth('api') function.

Then it will return the sended photo information back to the client. (This is just an test, later on we will improve the function's logic)

# Convert Base64 String to Image

Here we will convert the sended base64 string to image.

Step 1: Install Laravel Intervention Package

Intervention is a package to manipulate the image. Use the following command to install.

~~~~

composer require intervention/image

~~~~

Later we need to publish this to our application so use the following command as well.

~~~~

php artisan vendor:publish --provider="Intervention\Image\ImageServiceProviderLaravel5"

~~~~

Basically this command will publish this package and will complete the required configuration for us.

Step 2: Improve the logic of the updateProfile() function

In the updateProfile() function we will write extra logic to make sure that we save the sended image to our server.

For this purpose, add the following line to the function.

~~~~

        $user = auth('api')->user(); //so we can update the profile according to the current user

        if($request->photo) { 
            $name = time(). '.' . explode('/', explode(':', substr($request->photo, 0, strpos($request->photo, ';')))[1])[1];

            \Image::make($request->photo)->save(public_path('img/profile/').$name); //intervention package
        } //if have an photo

        return ['message' => 'Success'];
~~~~

Lets explain this function;

* We need a unique name for the image to save the server. For this purpose if there is an photo that user sent then we will use the following logic.

~~~~
$name = time(). '.' . explode('/', explode(':', substr($request->photo, 0, strpos($request->photo, ';')))[1])[1];
~~~~

Example usage of those functions: 

1. time() - returns the current time as Unix timestamp: Ex = 1537111825
2. . is used to concatenate the string
3. explode('/', 'Hello World') - means it will break the string into a array. Ex = "Hello World" will be Array([0] => 'Hello', [1] => 'World')
4. substr("Hello World", 6) - means it will return the rest of the text after 5th character.
5. strpos("Hello World World", "World") - means it will return the first occurence of "World" inside the string so it will return 6 because **World** is starting at the 6th index.

Now lets understand those functions parameters.

* explode(separator, string, limit)
 * separator = required, Specifies where to break the string
 * string = required, The string to split
 * limit = Optional, specifies the number of array elements to return

* substr(string, start, length)
 * string = required, Specifies the string to return a part of
 * start = required, Specifies where to start in the string
 * length = Optional, Specifies the length of the returned string. Default is to the end of the string.

* strpos(string, find, start)
 * string = required, Specifies the string to search
 * find = required, Specifies the string to find
 * start = Optional, Specifies where to begin the search

Now Lets understand how our formula will be resulted.

The sent request's photo field will be look like as follows:
**$request->photo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAADXCAMAAAC.......";**

* First it will get the current time as Unix timestamp like 1537111825
* Secondly it will be concatenated with **.**.
* Now lets understand **explode('/', explode(':', substr($request->photo, 0, strpos($request->photo, ';')))[1])[1]**
 * **strpos($request->photo, ';')** will return 14 because **;** is found in index 14
 * **substr($request->photo, 0, 14)** will return **data:image/png** because the function will start the begining of the string array which is the index 0 and it will go until index 14 (included)
 * **explode(':', 'data:image/png')[1]** will return **image/png** because as i explained in the example it actually returns  an array as like as Array([0] => 'data', [1] => 'image/png') but we need the 1st element so it will return 'image/png';
 * **explode('/', 'image/png')[1]** will return **png** because it has the same logic that we implemented before.

As a result **$name** variable will has the value as "1537111825.png" of course this value will be a little different for every image because we are using current time as Unix timestamp.

** Image Intervention to save the image **

We used image intervention to save the image so now lets see how does this function is works.

~~~~

\Image::make($request->photo)->save(public_path('img/profile/').$name); //intervention package

~~~~

Basically **\Image::make($request->photo)** will convert the sent base64 format to the image.
then we used **save(public_path('img/profile/').$name)** So, the converted image will be saved to this path with the $name.

Step 3: Lets create a folder in the public/img/ as profile.

If you do not create this folder probably you will get an error
