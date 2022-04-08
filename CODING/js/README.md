## 1. What is hoisting?
        Hoisting is the process by which we can access the value of the variable and 
        function before initializing it.

## 2. What is scoping?
        Scope determines the accessibility (visibility) of variables.

## 3. How are var, let const different?
        var : 
            -functional scope
            -can be re-declared
            -declare without initalization
            -access before assign but the value be undefined

        let :
            -block scope
            -can be updated but not re-declared
            -declare without initialization
            -cannot be accessed without initialization    

        const :
            -block scope
            -cannot be updated or re-declared
            -cannot be declared without initialization
            -cannot be accessed without initialization    

## 4. What are the two main differences in arrow functions?
        -Arrow functions do not have an arguments binding.
        -Unlike regular functions, arrow functions do not have their own this.
        -Arrow functions can never be used as constructor functions. Hence, they can never
         be invoked with the new keyword.

## 5. Does Call apply bind work for arrow functions?
        No,
        Since arrow functions do not have their own this, the methods call() or apply() can only
         pass in parameters. thisArg is ignored.

## 6. What does call apply bind do?
        The bind method creates a copy of the function and sets the this keyword,
        The call and apply methods sets the this keyword and calls the function immediately.

## 7. What are closures?
        A closure gives you access to an outer function's scope from an inner function.

## 8. Write a program to debounce a search bar?

## 9. Write a program to throttle a search bar?

## 10. create a custom method for an array called myMap, use prototype chain to achieve this
    const arr = [1,2,3]
    arr.myMap(a=>a*5)
    // [ 5, 10, 15 ]
    it should work in this manner

## 11. What is event bubbling?
        It is a methord of event propagation in HTML DOM API when an element inside another element
        and both element have registered a handle to that element.

## 12. What is event loop?
        It is responsible for executing the code, collecting and processing events,
         and executing queued sub-tasks.

## 13. Explain promises to a 5 year old, with simple examples
        JS promise object contains both the producing code and call to the consuming code.
        var promise = new Promise(function(res,err)){
                res()
                err()
        }
        promise.then((r)=>{
                console.log(res)
        }).catch(er){console.log(err)}
        
## 14. Write a function called sleep that will return a promise, if you do not provide a number to the function, then it will return an error and goto the catch block

        sleep(500).then(res=> {
            console.log('slept for ${res} milli seconds})
        })
        .then(errr=>{
            console.log(err)
        })
        
## 15.what does async await mean?
        As we know that js is a synchronous function so due to async and await it operates in 
        an asynchronous loop and wait inside the function.

## 16.What does the this keyword mean?
        The this keyword refers to the current object in a method or constructor.

## 17.What are classes? what are getters and setters?
        Classes are a template for creating objects.
        getter: getter methods are used to access the properties of an object.
        setter: setter methods are used to change the values of an object. 

## 18.How do you declare private and static variables in classes
        private:=> 
        class ClassWithPrivateField {
                        constructor() {
                        this.#privateField = 42;
                }
        }
        static:=>
        We create a static variable in JavaScript to prevent replication, fixed-configuration, 
        and it is also useful for caches. 
        class Example {
                static staticVariable = 'GeeksforGeeks';
                static staticMethod() {
                        return 'static method has been called.';
                }
        }

## 19.Create a Calculator class, it should be able to add, reduce multiply and divide. it should have a value getter, and that should return final output. keep the history of changes made as well, and keep that private, and a user should be able to see previous changes made to the value
        function dis(val)
        {
        document.getElementById("edu").value+=val
        }
        //function for evaluation
        function solve()
        {
        let x = document.getElementById("edu").value
        let y = eval(x)
        document.getElementById("edu").value = y
        }
        //function for clearing the display
        function clr()
        {
        document.getElementById("edu").value = ""
        }

## 20.What is currying?
       Currying is when you break down a function that takes multiple arguments into a series
        of functions that each take only one argument. 
## 21.Write a program to flatten an array
// input: [ 1, [ 2, 3 ], [ 3 ], [ [ [ 5]],  6]  ]
// output => [ 1, 2, 3, 3, 5, 6 ]

        var arr = [ 1, [ 2, 3 ], [ 3 ], [ [ [ 5]],  6]  ]
        console.log(arr.flat().flat().flat());