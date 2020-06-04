# Ionic-Angular-02-RentHouse-Project
In this repository, You will learn to create a major project like "Airbnb Company Project" which uses ionic, angular, node, firebase database, firebase REST API for Authentication and google maps API behind the scenes. Also we will be building an android and ios app using the same base code with the help of capacitor.

> Click :star:if you like the project. Pull Request are highly appreciated.

# Initial-Setup
Setup an ionic project which uses ionic, angular and node behind the scenes.

## Installation | Ionic

### Description
Ionic apps are created and developed primarily through the Ionic command-line utility. The Ionic CLI is the preferred method of installation, as it offers a wide range of dev tools and help options along the way. It is also the main tool through which to run the app and connect it to other services, such as Ionic Appflow.

| No. | Steps |
|---- | ---------
|1 | Click On : https://ionicframework.com/ . |
|2 | Click On 'Developers' dropdown tab then 'Installation'. | 
|3 | Open your Terminal and execute the below command to install the Ionic CLI with npm: |
> npm install -g @ionic/cli

### Note : Before proceeding, make sure your computer has Node.js installed.

## Installation | Node.js

### Description
Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser.

| No. | Steps |
|---- | ---------
|1 | Click On : https://nodejs.org/en/ . |
|2 | Download for Windows/Linux and install it. |

## Core-Project-Setup

### Description
We will create and setup an ionic project with named 'Ionic-Angular-02-RentHouse-Project', assuming that you have installed ionic cli and node.js.

| No. | Steps |
|---- | ---------
|1 | Using System/VS Code/Any Editor's terminal, Navigate into the folder where you want to create your new project folder for ionic project once you navigate it. |
|2 | In Terminal, execute the below command. |
|3 | **`ionic start`** |  
|4 | This basically generates you a project.Now, it will ask you a couple of questions like what should be the name of that project and I'll name it 'Ionic-Angular-Project-Setup' but you can of course choose any name you want. |
|5 | Project name: **`Ionic-Angular-02-RentHouse-Project`** |
|6 | Next you can choose from a couple of templates. Now the list here could change over time. You essentially have the choice between a blank template which is totally empty project with just a starting page, the side menu template where you have a side menu you can slide in from the left and a tabs menu where you have some taps at the bottom. |
|7 | Starter template: **`blank`** |
|8 | This will generate a new project with blank template and install all the dependencies like angular and ionic. |
|9 | Once it is finished, I'm asked if I want to use ionic app flow and connect my app. you can simply answer No here by typing 'n'. |
|10 | Install the free Ionic Appflow SDK and connect your app? (Y/n): **`n`** |
|11 | Now you can navigate into this newly 'Ionic-Angular-Project-Setup' or whatever you name that folder. |
|12 | **`cd Ionic-Angular-02-RentHouse-Project/`** |
|13 | Now run this project using the below command.|
|14 | **`ionic serve`** |
|15 | Behind the scenes as you can see here actually use the Angular CLI ie which is installed for you in this project to spin up a development server which in the end runs your application builds your angular application and that's really cool ionic uses the angular CLI behind the scenes so all the cool features offered by the Angular CLI are included in an ionic project as well and you don't need to wait for the Ionic CLI to update to include something you might want to use from the Angular CLI. |
|16 | By Default, Your project will be served at port 8100. Keep ionic serve running and open your ionic project at any browser and visit the link below |
|17 | http://localhost:8100/ . |
|18 | Finally your ionic-angular project is running and has been setup successfully. |

---

## Removing the environments folder and its files from the git

| No. | Steps |
|---- | ----|
|1 | It is recommended to not share your api key to the public. And the best place to keep your keys are in `environments` folder in `environment.prod.ts` and `environment.ts` files which help to swaps the key according to the environment, we are working as production or testing/staging. |
|2 | When you commit your project on git and then on github, you should add these files `environment.prod.ts` and `environment.ts` to the `.gitignore` file. So that while committing your project to git and then on github. These files will be ignored by git and github, therefore would not be loaded to git and github account. |
|3 | Open `.gitignore` file and add the below path in it. |
|4 | path for environment.prod.ts file : `src/environments/environment.prod.ts` and path for environment.ts file : `src/environments/environment.ts` |
|5 | Note : If you committed your project already to git and then you add these files in `.gitignore` file then `.gitignore` will not ignore these files. For that you need to remove these files from the git and then you need to push your project to github. |
|6 |Suppose in this project we already committed this project and also pushed it to the github. Now adding these files `environment.prod.ts` and `environment.ts` to the `.gitignore file would not be ignored. So delete these files or the complete folder first from the git, for that execute the below command to your terminal. |
|7 | `git rm -r --cached src/environments` |


# Working with 'Ionic-Angular-02-RentHouse-Project'


## Generating a `auth` page using Ionic CLI
### Description
We will generating an `auth` page in which we will implement our logic to work with the authentication of users.

| No. | Steps |
|---- | ---------
|1 | In VS Code/Any Editor's terminal, Using Ionic CLI; create a page with name 'auth'. |
|2 | Execute command `ionic generate` then Ionic CLI will ask **_what would you like to generate ?_** | 
|3 | Now choose `page` from the list that Ionic CLI gave you and then Ionic CLI will ask **_Name/path of page:_** type `auth` |
|4 | Ionic CLI will generate a page `auth` for you and also configure everything for this page. like adds routes, adjusts app-routing.module.ts to include the path for `auth` page using lazy-loading.  
|5 | Alternative, just execute this command to generate a page `auth` directly `ionic generate page auth` . This is do the same as above.|

## Generating a `places` page using Ionic CLI
### Description
We will generating an `places` page in which we will implement our logic where we can view all the places we can book as well as offer new places.
| No. | Steps |
|----|----|
|1 | Just execute this command to generate a page `places` directly `ionic generate page places` . |

## Generating a `discover` page inside places folder using Ionic CLI
### Description
We will generating an `discover` page in which we will implement our logic where we'll have our discover area here where we can discover places we can book.
| No. | Steps |
|----|----|
|1 | Just execute this command to generate a page `discover` directly `ionic generate page places/discover` . |

## Generating a `offers` page inside places folder using Ionic CLI
### Description
We will generating an `offers` page in which we will implement our logic where in order to be able to discover something people need to be able to offer places.
| No. | Steps |
|----|----|
|1 | Just execute this command to generate a page `offers` directly `ionic generate page places/offers` . |

## Generating a `new-offer` page inside offers folder using Ionic CLI
### Description
We will generating an `new-offer` page in which we will implement our logic basically where we will be able to enter the data for a new place we want to offer.
| No. | Steps |
|----|----|
|1 | Just execute this command to generate a page `new-offer` directly `ionic generate page places/offers/new-offer` . |

## Generating a `edit-offer` page inside offers folder using Ionic CLI
### Description
We will generating an `edit-offer` page in which we will implement our logic basically where we will be able to edit the offered places details.
| No. | Steps |
|----|----|
|1 | Just execute this command to generate a page `edit-offer` directly `ionic generate page places/offers/edit-offer` . |

## Generating a `place-detail` page inside discover folder using Ionic CLI
### Description
We will generating an `place-detail` page in which we will implement our logic to see the details of a single place. Basically When we are in discover page where we can see all the places we can book. Now when we tap on one of these places we want to see the details. For that we need a `place-detail` page for single place.
| No. | Steps |
|----|----|
|1 | Just execute this command to generate a page `place-detail` directly `ionic generate page places/discover/place-detail` . |

## Generating a `offer-bookings` page inside offers folder using Ionic CLI
### Description
We will generating an `offer-bookings` page in which we will implement our logic where we all do want to be able to see bookings. With that I mean both bookings for places we offered as well as our own bookings now for places we offered.
| No. | Steps |
|----|----|
|1 | Just execute this command to generate a page `offer-bookings` directly `ionic generate page places/offers/offer-bookings` . |

## Generating a `bookings` next to places folder using Ionic CLI
### Description
We will generating an `bookings` page in which we will implement our logic where we also have the bookings we made ourselves.
| No. | Steps |
|----|----|
|1 | Just execute this command to generate a page `bookings` directly `ionic generate page bookings` . |

# Adding `ion-tabs` to our project/app 
### Description
* We will adding tabs to implement a tab-based navigation. Tabs are a top level navigation component. The component is a container of individual Tab components.

* The `ion-tabs` component does not have any styling and works as a router outlet in order to handle navigation. It does not provide any UI feedback or mechanism to switch between tabs. In order to do so, an `ion-tab-bar` should be provided as a direct child of `ion-tabs`.

* Both `ion-tabs` and `ion-tab-bar` can be used as standalone elements. They don’t depend on each other to work, but they are usually used together in order to implement a tab-based navigation that behaves like a native app.

* The `ion-tab-bar` needs a slot defined in order to be projected to the right place in an ion-tabs component.

## Generating a `places` service in places folder using Ionic CLI
### Description
We will generating an `places` service in which we will implement our logic to render the list of places and its state management.
| No. | Steps |
|----|----|
|1 | Just execute this command to generate a service `places` directly `ionic generate service places/places` . |

## Creating a `place.model.ts` model file in places folder manually
### Description
We will creating an `place.model.ts` model file in which we will define our structure/properties of our place with property as id, title, description, imageUrl, price, etc.

## Generating a `auth` service in auth folder using Ionic CLI
### Description
We will generating an `auth` service in which we will implement our logic for authentication of user.
| No. | Steps |
|----|----|
|1 | Just execute this command to generate a service `auth` directly `ionic generate service auth/auth` . |

## Generating a `auth` guard in auth folder using Ionic CLI
### Description
We will generating an `auth` guard in which we will implement our logic for preventing un-authorize access.
| No. | Steps |
|----|----|
|1 | Just execute this command to generate a guard `auth` directly `ionic generate guard auth/auth` . |
|2 | Select CanLoad interface and the press 'Enter' . |
