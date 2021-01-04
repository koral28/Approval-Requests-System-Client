 Project running:
 1. run the approval_requests_client:
    PS C:\Vuforia - Full Stack Engineer\approval_requests_client\src> npm start
 2. run the backend:
    PS C:\Vuforia - Full Stack Engineer\backend\server> npm start

The project divided into 2 parts:
1. approval_requests_client: the frontend which I developed with react hooks, materialize and auth0 
   for authentication and authorization mechanism.
2. server: the backend which I developed with nodejs, express. 
   I used nodemailer for email sending. If you choose to send the mails to Gmail address please disable
   Gmail feature here:
   https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4PB0gSGHo954ZAXKGLj9GTU-2EMO6Rcb79A5WyrQH9d351SVgkRHzqL-LusntANI-RviBUYRreg58_SH8kxgR_6VvV59g

 The npm modules installation:
 approval_requests_client:
 1. @auth0/auth0-react
 2. axios
 3. react-hook-form
 4. react-router-dom

 backend:
 1. nodemailer
 2. cors
 3. dotenv
 4. axios
