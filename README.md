## Inspiration
Applying an excess amount of road salt during snowstorms can easily contaminate drinking water supplies. [Recent research] (https://www.bloomberg.com/news/articles/2015-03-12/this-winter-s-road-salt-has-already-led-to-salty-drinking-water-parts-of-new-jersey) has found that repeated onslaught of snow and ice has left an abundance of salt residue, enough to push drinking water supplies well over the EPA’s advisory standard—enough to produce a noticeably salty taste in some regions. A geologist, at the University of Maryland, warns against the negative, cumulative effects of salt application in the Washington D.C. area. Along with other scientists in the local area, he expresses concern for increasing salinity in drinking water and the subsequent decaying [biodiversity] (https://www.vox.com/2015/1/13/7531833/road-salt-environment-alternatives?fbclid=IwAR0cX2gKhC_1Jaiq2efEOayzxLOQJ_d3lYoDBzozmcM0yzUNUFVUkhVrkOo). Our project combats this issue by accurately predicting the amount of road salt needed before the snowstorm. This prevents an excessive amount of road salt from being applied to roads, saving resources and combating the issue of water contamination. 

## What it does
Our project predicts the amount of salt needed for a snowstorm given user-inputted values of the predicted amount of snow and amount of miles plowed using scikit-learn’s `DecisionTreeRegressor`. These predictions are trained on data taken from EastBanc’s `SNOWiQ - Residential Data API` – more specifically, the `StatisticsByDepot` dataset. The output prediction is presented on our localhost along with a graph plotting the amount of snow vs. the needed amount of salt. 

## How we built it

First, we extracted data from the ``SNOWiQ - Residential Data API``. Specifically, we used ``StormEvents`` to first gather a list of all the snowstorms in Montgomery County, Maryland for the 2018-19 winter season. We used these storm event ids to query ``StatisticsByDepot`` and find information about the total salt used in each of 7 depots. You can take a closer look at all the data provided by EastBanc Technologies <a href="https://hacktj2020.eastbanctech.com/docs/services/"> here. </a>

Once we had this data, we looked specifically at the ``predictedPrecipitation`` and ``totalMilesPlowed`` parameters for each storm and depot. These parameters inform us of how much precipitation, either rain or snow, was predicted before the snowstorm and how many miles were actually plowed during the snowstorm, parameters that the user would be able to estimate to use our model. This constituted the "x" part of our (x,y) training data.

For the "y" part of our (x,y) training data, we extract the ``totalAmountOfSaltUsed`` parameter from the data. This informs us of the amount of salt, in tons, used during the snowstorm at each depot.

Next, we trained a ``DecisionTreeRegressor`` on 70% of our total data (the remaining 30% served as our testing set) <a href="https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeRegressor"> with scikit-learn. </a>  Decision trees are a supervised learning algorithm, meaning that given knowledge of the amount of salt needed for past snowstorms (described by their predicted precipitation, or estimated intensity of the storm, and the total of miles plowed, or the breadth of the storm), the decision tree can predict the amount of salt needed in future snowstorms. Furthermore, we tried averaging the accuracy of multiple decision trees (bagging) and constructing a series of trees that build upon the previous tree’s weaknesses (boosting), ensemble methods known as `RandomForestRegressor` and `GradientBoostingRegressor` respectively, as well, however, these did not improve accuracy.

## Challenges we ran into
Our primary challenge was insufficient, real-life data to properly train our decision trees. There were only 15 snowstorms in Montgomery County, Maryland in the 2018-19 winter season, which led to 15 * 7 depots = 105 data points, grossly insufficient for the amount of data typically needed to conduct a supervised learning algorithm. 

Additionally, although our team is well-versed in Python, we had not previously applied these skills in a real-world setting. Originally, we tried to host our website on Glitch, however, this made it difficult to connect our Python-based decision trees to our JavaScript-based Express application (which is why we switched to hosting the application on our local computers).

## Accomplishments that we're proud of
We are proud of our overall website. We were able to use advanced CSS to make an interactive, aesthetic front-end. Our back-end used complex machine learning algorithms, specifically decision tree regressors, a form of supervised learning. 

## What we learned
Along with acquiring technical skills such as how to use Express and scikit-learn, we learned how to pool each of our various skill sets and apply the collection to a real-world problem. Khushmeet and Stuti, for instance, used our HTML, CSS, and JavaScript knowledge to work on the front-end, while Mitali and Srilakshmi worked on the back-end using their knowledge from machine learning. We gained insight into the practical applications of coding and algorithmic knowledge from previous classroom experiences. 

## What's next for Salt Slip-Ups
In the future, we hope to find more data to train our decision trees on. By providing predictions of the needed amount of salt for each location and pathway, road crews can also begin to think about the best path to take, further saving money, time, and resources.

## Learn more on [Devpost](https://tinyurl.com/saltslipups)
