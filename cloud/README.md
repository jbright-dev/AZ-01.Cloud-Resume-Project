# Frontend readme
## *Frontend Readme detailing styling changes and HTML modifications*<hr>

## Table of Contents 
- [Cloud-Resume-Project](#cloud-resume-project) 
  - [Technologies Used:](#technologies-used)
  - [Challenges](#challenges)
  - [Diagram](#diagram)
  - [Credits](#credits)
    - [Project References](#project-references)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Cloud](#cloud)
    - [Other](#other)
  - [License](#license)

<hr>

## Technologies Used:
- Languages: HTML, CSS, Markdown

<hr>

## Challenges
- Replacing Favicon link code with the code from Font Awesome
- Adding horizontal rule to resume sections
- Duplicating the education section
- Creating Frontend Readme 
<hr>

## Diagram 
![Project Diagram](images/sitemap.png)<hr>

# Frontend Overview
## *Scope of Frontend*
### HTML document will be updated with personal information. After updates are made, a javascript file will be created and the visitor counter function will be written.  

<hr>

## Frontend
### HTML

modifications implemented were the inclusion of horizontal rules, adding validation links to certifications, and linking the design narrative to its corresponding Jira Page and GitHub Repo.

### JavaScript
  **Purpose of the function**

  The purpose of the function is to grab the JSON that is provided by the API, grab the correct part of that JSON and show it in our HTML document. 

- create file in frontend folder named 'main.js'. Declare a constant named 'functionApi;. The function will require a URL to place in the single quotes, but we will this leave blank until later.
- To call the function add an event listener named 'DOMContentLoaded' and get visit count
- create constant and name it "getVisitCount
- declare variable, we used the number thirty
- write fetch function that fetch's the API and grabs the response and returns it to JSON
- Then grab the response and log a message to the console for debugging purposes
- Now set variable to the created variable to the actualy data that's in the JSON response
- grab HTML document and get the element by the counter Id and then the inner text will be set to count data
- catch error, if present, and log the error message to the consle
- return count

<hr>

## Credits

### Project References

- <a href="https://github.com/madebygps/cgc-azure-resume">Cloud Guru Azure Resume Challenge.</a>
- <a href="https://www.youtube.com/watch?v=ieYrBWmkfno&t=281s">Cloud Guru Azure Resume Challenge Video</a>
  
### Frontend
- <a href="https://www.geeksforgeeks.org/html-hr-tag/">GeeksforGeeks.org article on adding a horizontal rule</a> 
<hr>