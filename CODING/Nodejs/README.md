# Node - Interview Questions

## 1. Explain in brief what is node js?
    Node js is the open source development platform for the execution of the javascript code.

## 2.How is node js non blocking?
    The event loop is what allows the node.js to perform non-blocking I/O operation despite that js is single thread language.
    Event Loop - Respnsible for executing the code, processing event and executing the events.

## 3.What is throughput?
    Its a measure of how many unit of information a system can processed in a given amount of time.

## 4.How is Node js having high IO throughput?

## 5.What are CPU intensive tasks?
    They are complex user actions that eat up more RAM.

## 6.How can you end up blocking your main thread in node.js?
    By using setTimeOut()

## 7.What is the event loop?
    Event loop are those which are responsible for the execution of the code, processing and executing the event.

## 8.What are different phases in event loop?
    -poll
    -check
    -close callback
    -timers
    -pending callback
    -prepare

## 9.What is process.tick?
    When we pass this then the engine then this function is invoked at the end of the operation

## 10.When can process.tick starve your event loop?

## 11.What is the difference between setTimeout and setInterval?
    setTimeout will be triggered when the setInterval keeps trigering expression regularly after 
    a given interval of time.

## 12.How can you make a network request with http module from the backend?
    By setting the call field to http.

## 13.How can you create your own events?
    const event = new Event('build')

## 14.What are clusters?
    Its a collection of stand-alone computers connected using some interconnected network.

## 15.How does your Node.js application handle scale? Elaborate
    Monitor your application
    Use TimeOuts
    Load Balancer

## 16.What is the difference between readFile and readFileSync?
    readFiles methord can read the files in a asynchronous manner.
    readFileSync methord can read the files in synchronous manner.

## 17.What are CORS? How do you configure them? Why do you need them?
    Cross origin resource sharing is a http based mechanism that allows a server to indicate any 
    origin other then its own origin.
    For the browser there is a extension with which the cors work
    It is required to enable secure data transfer between the browser and serve.

## 18.What is rate limiting?
    It is a strategy for limiting network traffic.

## 19.How does middlewares work in express?
    These are the function that have access to the request and the response object and the next
    function in the application request response cycle.

## 20.What is the difference between Encryption and Hashing?
    Encryption is two way function that includes encryption and decryption
    Hashing is one way function.

## 21.What is the difference between https and http?
    HTTP port is 80 and HTTPS port is 443
    HTTP is unsecured and HTTPS is secure

## 22.What is TLS?
    Transport Layer Security 

## 23.What is AES?
    Advanced Encryption Standard

## 24.What is JWT Token? Why do we need to use JWT? What are some pros and cons?
    JSON Web Token, is an open standard used to share security information between  a client and a server.

## 25.What is salting? Where do we store salt?
    It works by adding an extra secret value to the input, extending the length of the original password.
    Salt is stored in password database.

## 26.What is the difference between Authorisation and Authentication?
    Authentication is the process of verifying who is someone
    Authorization is the process of access to the data and different files.

## 27.What is difference between JS on the browser and node?
    Node js has full access to the system whereas for the browser is get access to the given files.

## 28.What is V8?
    V8 is the name of the JavaScript engine that powers Google Chrome. 