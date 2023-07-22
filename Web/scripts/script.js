$("#formValidation").validate({
    rules:{
        name:{
            minlength: 2
        },
        email:{
            email: true
        },
        phone:{
            number: true,
            minlength: 10,
            maxlength: 10
        }
    },
    messages:{
        name:{
            required: "Please enter your name",
            minlength: "Name at least 2 characters"
        },
        email:"Please enter your email",
        phone:"Please enter you"
    },

    submitHandler:function(form){
        form.submit();
    }
    
});