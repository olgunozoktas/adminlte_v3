# Lets Prepare File To Upload with Base64 in JavaScript to the server

Step 1: Create a function to handle uploaded image

As you know, previous tutorial we have created Profile.vue and whenever user goes to the /profile page it automatically loads all the information of the user and fills the form.

So now, we will create a logic to handle to upload new profile image to the server.

* First of all we need a function to get the selected image from computer. So write the following function.

~~~~

            updateProfile(e) {
                let file = e.target.files[0];
                let reader = new FileReader(); //will read the file
                reader.onloadend = (file) => { //ES6 Version (e) => { .... } so we can use this.form.photo otherwise it will not understand this.
                    this.form.photo = reader.result;
                }
                reader.readAsDataURL(file);
            }
~~~~

Basically, whenever user selects an image from the computer this function will read it as Base64 Format. But of course we need to call this function whenever user selects the image. So we have to create a @change (on change event) on any specific element in the Profile.vue.


### Lets Understand how does exactly this function is works

1. Whenever user selects an image by clicking the **input** element which has the type as **file** then automatically this element creates an array called **files** and in this array it creates an object inside as called as **FileList** which holds all the selected files.
2. To access to the FileList object we have to write **e.target.files**, (Lets understand this line step by step).
	1. **e** is the element which called this function.
	2. **target** is define the element which triggered this function
	3. **files** is the array which holds FileList is an list object
	4. **files[0]** means, return the first object in the FileList, so **file** variable will hold the first file that is been taken through the **input** element.
	[To more information go to - Link](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)
3. To read the file inside **file** variable we need created variable called reader which is the instance of the FileReader(), which is default object in the javascript and lets web applications runs asynchronously to read the contents of file(ro raw data buffers) stored on the user's computer.
4. FileReader object has many event handlers but we will use the **onloadend**, this one is triggered when the reading operation is completed (either in success of failure). So after the reading is completed it will return the readed object in the object field called **result**. Thats why we said **this.form.photo = reader.result**.
5. Here we used **reader.readAsDataURL(file)** this is a default function that available in **FileReader** object. Basically it starts reading the contents o the specified **Blob**, once finished, the result attr,bute contains a **data:** URL representing the file's data.

Thats all actually how this function is works. But as a reminder that FileReader() object is an asynchronous so that means until **readAsDataURL(file)** function is completd, the event handler **onloadend** will not started. Because as mentioned above this event handler runs after the reading operation is completed.

If this looks like a little completed try to read AGAIN or make sure that you have learned it by searching.

Step 2: Lets writte @change on a **<input type="file">**

In the Profile.vue lets find the label tag which has as text *Profile Photo* and under it there is **input** element and to this element add the following event handler.

~~~~

<input type="file" @change="updateProfile" name="photo" class="form-input">

~~~~

When user select an image by clicking this element then automatically updateProfile() function will run and as said previous, the selected file will be converted to the Base64 Format.