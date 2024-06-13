From cypress/included:latest

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install --save-dev cypress

RUN ${npm bin}/cypress verify
RUN ["npm","run","Start:RegressionTesting"]


