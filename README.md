# BiLLy – the Bill Managing Web Application

## What it Does

BiLLy is a bill management system to help track and record purchases quickly and efficiently. The user is simply required to take a picture of their receipt and upload it onto our web application which then shows the total of their purchase. Each user also requires their own username and password to keep their profiles unique. This application not only displays a summary of the current uploaded receipt, but also shows a history of all the previous uploads to keep a record of all the user’s spending.

## How we Built it

We have a MERN stack which covers our backend and frontend. The project is node based, we use MongoDB to store our billing information in JSON form. The API endpoints are set up in Express.js and the frontend utilizes React's component based structure. We built several endpoints which provide us essential functionality such as retrieving a list of bills, calling the Google Vision OCR Engine, and adding bills to an associated user. One of the primary challenges we solved was gaining the ability to make requests from a different port on the localhost from React. The user interface was initially crafted in HTML using basic CSS styling, and was later converted into component based JSX code. 

## What we learned

As two of our members have very limited experience in programming, this was an amazing learning experience for them. Specifically, they were exposed to using Git as a version control system, and they also learned about various common web technologies that power our world today.

Our other two members had their first tango with the Google Cloud Platform, which widened their arsenal of technologies. Creating a full stack application also polished their skills in both front and back end departments, which is never a bad thing.

## Challenges:

As with any software project, we ran into many challenges along the road. Logistically, we had a few issues working together on source control, and it took some practice working in unison and avoiding merge conflicts. Many of our technical challenges involved connecting the backend to the view. Our team has members with expertise in React, some with expertise with Node, but we had no exprience merging these 2 worlds. We had significant issues making API requests from React because they both ran on different ports on localhost. We also ran into some challenges integrating component based rendering. It was slightly confusing at times trying to pass API methods or JSON responses into components as properties. Although the process was not smooth, we overcame many obstacles and created a project we are proud of.

## Whats Next for BiLLy

The next steps to further increase the functionality of our application is to incorporate a statistics tab to display all of the user’s purchases in a graph, providing a visual of spendings over time. We would also like to improve our logical deduction to allow us to filter the Google Vision OCR Engine results for a larger variety of receipts. As constructed, we make several assumptions for the program to spit out the correct results. Moving forward, we would like to work out these bugs.

