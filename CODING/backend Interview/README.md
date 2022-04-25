# Backend Interview

## 1. What is Caching? How can you save money with Caching?
    Caching is the process of storing copies of files in a cache, or temporary storage location,
     so that they can be accessed more quickly.
    -It increases the performance of the application by serving user with cached output.
    -It decreases server round trips for fetching data from the database by persisting data 
        in the memory.

## 2. What is load balancing?
    Load balancing refers to efficiently distributing incoming network traffic across a group 
    of backend servers.

## 3. What is CAP Theorem?
    It is a tool used to make system designers aware of the trade-offs while designing networked 
    shared-data systems. 
    C-consistency
    A-Availability 
    P-Partition 

## 4. What is PACELC Theorem?
    PACELC theorem is an extension to the CAP theorem. It states that in case of network partitioning (P)
     in a distributed computer system, one has to choose between availability (A) and consistency (C) 
     (as per the CAP theorem), but else (E), even when the system is running normally in the absence of partitions, one has to choose between latency (L) and consistency (C).

## 5. What is Eventual Consistency?
        Eventual Consistency is a guarantee that when an update is made in a distributed database, that update will eventually be reflected in all nodes that store the data, resulting in the same response every time the data is queried.

## 6. What is Strong Consistency?
    Strong consistency is one of the consistency models used in the domain of concurrent programming.

## 7. What are the different types of databases?
    Centralised database.
    Distributed database.
    Personal database.
    End-user database.
    Commercial database.
    NoSQL database.
    Operational database.
    Relational database.
    Cloud database.
    Object-oriented database.
    Graph database.

## 8. What are message queues?
    message queues and mailboxes are software-engineering components typically used for 
    inter-process communication, or for inter-thread communication within the same process.

## 9. Which service by Amazon Web Services (AWS) can you use for Queues?
    Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables 
    you to decouple and scale microservices, distributed systems, and serverless applications.

## 10. What is Pub Sub ?
    Publish/subscribe messaging, or pub/sub messaging, is a form of asynchronous service-to-service communication used in serverless and microservices architectures.

## 11. How do you go about sending a million emails? What are the steps you will take to ensure system is stable, and will end up with lesser failures?

## 12. What are webhooks?
    A webhook in web development is a method of augmenting or altering the behavior of a web page
     or web application with custom callbacks. 

## 13. What is Docker? Why do we use it?
    Docker is an open source containerization platform. It enables developers to package applications into containers—standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.

## 14. What is S3 Service in AWS?
    Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services that provides object storage through a web service interface.

## 15. What is EC2 Instance in AWS?
    An Amazon EC2 instance is a virtual server in Amazon's Elastic Compute Cloud (EC2) for running applications on the Amazon Web Services (AWS) infrastructure.

## 16. What is Cloudfront in AWS?   
    web service that speeds up distribution of your static and dynamic web content, such as . html, 
    . css, . js, and image files, to your users.

## 17. What is Route 53 In AWS?
    Amazon Route 53, part of the Amazon Web Services (AWS) cloud computing platform from Amazon.com normally referred to as AWS Route 53, is a highly available, scalable Domain Name System (DNS) service.

## 18. What are ELBs in AWS?
    Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets and virtual appliances in one or more Availability Zones

## 19. What is TLS?
    Transport Layer Security, the successor of the now-deprecated Secure Sockets Layer, is a 
    cryptographic protocol designed to provide communications security over a computer network.

## 20. What is the difference HTTPS vs HTTP?
    HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses
    HTTPS is far more secure than HTTP. 
    A website that uses HTTP has http:// in its URL, while a website that uses HTTPS has https://.

## 21. What is a reverse proxy?
    A reverse proxy is a server that sits in front of web servers and forwards client 
    requests to those web servers. 