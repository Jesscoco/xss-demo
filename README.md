# xss-demo
## The journey of XSS Demo with React Js 
This project is a page where you can post comment and react to others comments
### Step1: Post a comment in "Comment section"(if you want to simulate a cross site scripting )
### Step2: Insert `<a href="#" onclick="window.location='https://example.com'; return false;">Click here</a>`
### Step3: Click on  *Click here*  button
### Step4: Done !!! You simulate a cross site scripting
