# Backend dive-in: learning databases 

This is my 5th assignment for the Dynamic Web Development class in ITP, NYU. The course focuses on the fundamentals of building "full stack" web applications. 
Assignment for this week is to write server-side JavaScript to do CRUD operations on a database, controlled by an API, and client-side JavaScript triggered by user actions and making API requests, reading/writing to the database.
I also should prepare my final project proposal.

## Summary

This is the base backend code for my final project, that I will describe below. I didn't work on frontend part at all, because the main goal for this week was to understand databases.
I also had a few issues that I can't solve for now, most importantly — connecting to the MongoDB using mongoose.connect. I know what might be the reason of the problem, and I feel like I need to start building application from scratch avoiding some of the practices I used for this one.

I am also still struggling with pushing my local repository to github, this only got worse but and I also know what might be possible solution for that.

However, I finally got what Postman does, got more comfotable with npm and the whole backend structure of the document, and even a little bit more comfortable with the syntax in general. 
I also start to understand what's under the hood of the data and come to thinking of it as of structured and organized objects.


## Final project proposal

I am coming from Russia, and, in my opinion, there is the certain issue in my country about how some data or events are being presented in media. To be more precise, they are not presented at all or are being presented in a way that it's hard to say whether information is reliable or not.

Coronavirus is a dramatic example. My family is deeply concerned about the situation but they don't know whether the numbers of the cases in Russia are real, or authorities just manipulate the panic in order to prevent people from gathering together on any occasions including poitical ones.

However, I am not going to dedicate the project to the virus. I've been thinking a lot about another problem that is ecological and oe deeply silenced in the media.
There are places in Russia that became, in fact, 'small Chernobyls' foo they are being used as waste landfills or/and chemical wastes for years.
These places affect environment, water, animals, and people around them. Nevertheless, I don't think that I could just find some database with the numbers on deseases or eco-catastrophes that are caused by these huge waste dumps.

So, I started thinking how to create the dynamic data-vis project with NO data.

![One of the waste landfills in Russia, "Lesnaya ground" ](https://habrastorage.org/webt/ix/4n/qy/ix4nqy1xknkxavylgzgetfmy2r0.jpeg)

I thought I could first have a brief research on the one spesific place and the damage it causes to the communities, nature, and climate, narrowing down to the limited number of implications. 
Then I would like to build a web application where people from the area could testify (= post to API) on these specific implications (case of desease, for instance). 
All the posts are being stored in database. 
Frontend part of the application is the map and the objects, built generated out of the quotes from people's posts. More cases, the bigger these objects (now I imagine something like text bubbles or word cloud).

## Backend for final project

Below is the documentation of my process working on the database and API this week. The goal was to build the backend part of the application where users can post to the database.
There were some moments of happiness when things worked, and moments of desperation. This week I wasn't focusing on the Workbook provided for us in class. Instead, I spent more time on YouTube. Maybe that was a mistake, so I made a note to myself to complete the Workbook on databases as well.
It would be smart also because the workflow in the Workbook is the most up-to-date as I realized eventually.

So, it was all going rather well:

<a href="https://imgbb.com/"><img src="https://i.ibb.co/mTsgP88/Screenshot-2020-03-07-at-21-27-39.png" alt="Screenshot-2020-03-07-at-21-27-39" border="0"></a>

<a href="https://imgbb.com/"><img src="https://i.ibb.co/1vz1WZ6/Screenshot-2020-03-07-at-21-44-48.png" alt="Screenshot-2020-03-07-at-21-44-48" border="0"></a>

<a href="https://imgbb.com/"><img src="https://i.ibb.co/2jhZdsR/Screenshot-2020-03-07-at-22-19-38.png" alt="Screenshot-2020-03-07-at-22-19-38" border="0"></a>

<a href="https://imgbb.com/"><img src="https://i.ibb.co/k8SWTM4/Screenshot-2020-03-08-at-13-50-12.png" alt="Screenshot-2020-03-08-at-13-50-12" border="0"></a>

<a href="https://imgbb.com/"><img src="https://i.ibb.co/s2Z7Brr/Screenshot-2020-03-08-at-13-55-16.png" alt="Screenshot-2020-03-08-at-13-55-16" border="0"></a>

<a href="https://imgbb.com/"><img src="https://i.ibb.co/d6BPXSt/Screenshot-2020-03-08-at-13-55-48.png" alt="Screenshot-2020-03-08-at-13-55-48" border="0"></a>

<a href="https://ibb.co/GQr6sDg"><img src="https://i.ibb.co/XxGQyPm/Screenshot-2020-03-08-at-14-11-44.png" alt="Screenshot-2020-03-08-at-14-11-44" border="0"></a>



### And then I just couldn't connect to the datadase and post any requests using Postman.


<a href="https://ibb.co/s9v1s6K"><img src="https://i.ibb.co/whNQpwS/Screenshot-2020-03-08-at-15-20-21.png" alt="Screenshot-2020-03-08-at-15-20-21" border="0"></a>

<a href="https://ibb.co/ryyT93X"><img src="https://i.ibb.co/s33k7CX/Screenshot-2020-03-08-at-15-02-12.png" alt="Screenshot-2020-03-08-at-15-02-12" border="0"></a>



### I thought that I should modify these lines:

```//Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }, () => 
    console.log('connected to DB!')

);
```

### Here is what I ended up with after googling and studying the example code that we had in class. The problem is not solved, however, even though now the code looks closer to the class example that it originally was.

<a href="https://ibb.co/gFnbX2F"><img src="https://i.ibb.co/84hnRC4/Screenshot-2020-03-08-at-17-05-10.png" alt="Screenshot-2020-03-08-at-17-05-10" border="0"></a>

<a href="https://imgbb.com/"><img src="https://i.ibb.co/r0GkJpV/Screenshot-2020-03-08-at-17-12-56.png" alt="Screenshot-2020-03-08-at-17-12-56" border="0"></a>

## "git: fatal: Could not read from remote repository"-situation

I will probably have to generate new SSH key because I just don't stop getting errors trying to push my local repository to the remote one from the command line.

<a href="https://imgbb.com/"><img src="https://i.ibb.co/CJmMycZ/Screenshot-2020-03-08-at-16-41-27.png" alt="Screenshot-2020-03-08-at-16-41-27" border="0"></a>

<a href="https://ibb.co/g9YFjGf"><img src="https://i.ibb.co/wgtr0TP/Screenshot-2020-03-08-at-16-35-22.png" alt="Screenshot-2020-03-08-at-16-35-22" border="0"></a>

And also, I didn't have any idea that the number of the uploads to GitHub is limited, so node_modules are not here. I wonder if it might be the reason why I couldn't push my repository from the terminal.


## Built with

* [VS Code](https://code.visualstudio.com/)
* [MongoDB Atlas](https://cloud.mongodb.com/)
* [npm](https://www.npmjs.com/)
* [Postman](https://www.postman.com/)
* [Express] (https://expressjs.com/)

## References

* Dev Ed. [Link](https://www.youtube.com/watch?v=vjf774RKrLc)

## Resourses that I couldn't absorb this week but will have to, eventually

* [Dan Shiffman course on API and data](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X)
* [Workbook on databases](https://github.com/itp-dwd/databases-workbook)

