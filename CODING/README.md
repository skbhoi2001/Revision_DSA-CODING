
# Questions

## 1 . Explain briefly what happens when you hit a url? explain DNS lookup 

### URL- UNIFORM RESOURCE LOCATOR
        * Browser looks into the IP address
        * Browser initiates the TCP connection(Transmission Control Protocol)
        * Browser sends the HTTP request to the server
        * Server handles the incoming request and sends the request
        * Browser display the HTML content

### explain DNS lookup
        Domain name system,  A DNS lookup is the process by which a DNS record is returned from a DNS server.


## 2. What is a URLs full form? Explain what a url is and the four parts it consists of The protocol in use The hostname of the server The location of the file The arguments to the file

## 3. What is HTTP protocol?
        HyperText Transfer Protocol is a protocol to fetch resources from the HTML documents.
        Acccording to this data is transfer in the form of plain text , hypertext,audio,video etc.

## 4. What is TCP Protocol?
      TCP stands for Transmission Control Protocol. It is a transport layer protocol that facilitates the transmission 
      of packets from source to destination.  

## 5. Explain all the different HTTP methods?
        * GET
        * POST
        * PUT
        * PATCH
        * DELETE
        * HEAD 
        * CONNECT

## 6. What are HTTP headers?
        The HTTP headers are used to pass additional information between the clients and the server through 
        the request and response header.       

## 7. What are some HTTP response codes? what does it mean? 2xx, 3xx, 4xx, 5xx      
         Its a server response to a browser's request.
         i.e. whwn we visit any website then the browser sends the request to the site server, 
         then server request the browser with the three digit code.
         
         * 2xx- success
         * 3xx- redirection
         * 4xx- client error
         * 5xx- server error

## 8.   What does cache control on http response mean?
        A HTTP request to specify to specify browser policy in both client request and server responses.
        Browser policy- to check the requst is satisfied or not

## 9.   What is polling?    
        Its a technique that allows the server to push information to the client

## 10.  What is long polling?
        Its a traditional polling that allows the server to sends data to the client whenever required.

## 11.  What are web sockets?
        Communication protocol used in client server communication

## 12.  How is web sockets different from HTTP?

        | Web Socket                       | HTTP                               |
        | -------------                    |:-------------:                     |
        | bi-directional communication     | unidirectional communication       |
        | used in trading,monitoring etc   | used in RESTful application        |
        | Its faster then HTTP             | little bit slower                  |              

## 13.  What is HTTPS?
        Hypertext transfer protocol secure is the secure version of HTTP used to send data between browser and website.

## 14.  What is Cross Origin Resource Sharing? Why do we need it?
        Cross-origin resource sharing is a mechanism where web browser request from others web pages 
        eg. generally in a.com website required some data from the b.com so the server will request afrom the b.com
        CORS is required because it helps to securely tranfer data between browser and server.

## 15.  What does Access-Control-Allow-Origin header do?
        Tells browsers to allow that origin to access the resource.

## 16.  What is clickjacking? How do you fix it?       
        ClickJacking is user interface redress attack.
        If some user click on unknown thing then the privacy is breezed and the hackers hack the system.

## 17.  What are some performance metrics for your website?
        * Page Speed
        * Time to Title
        * Time to Start Render
        * Requests Per Second

## 18.  What does the following term mean?
        * Time to first byte:- Time between the browser requesting a page and the time when it will receive 
        the first byte

        * Page load time:-The average amount of time it takes for a page to show up on your screen.

## 19.  What do CDN or Content Delivery Networks do? When do you need a CDN?
        Speed up the delivery of web content by bringing it closer to where users are.                          
        It helps when more then one user request from a website.

## 20.  What is the difference between Client Side Renderring and Server Side Renderring?
        CSR:-

        SSR:-

## 21.  What is Progressive Renderring?
        Progressive rendering is the techniques which is used to render content for display as quickly as possible.

## 22.  What is the difference between Preloading and Prefetching resources?
        - Preload is an early fetch instruction to the browser to request a resource needed for a page
        - Prefetch where fetched resources and requests need to persist across navigations.

## 23.  What are service workers?
        Its acts like a proxy server that sit between the web application, the browser and the available network                      
