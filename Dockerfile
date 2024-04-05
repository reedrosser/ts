FROM node:20
WORKDIR /ts
COPY . .
EXPOSE 9000
CMD ["npm", "run", "launch"]
