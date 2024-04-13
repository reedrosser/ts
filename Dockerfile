FROM node:20
WORKDIR /ts
COPY . .
ENV ESLINT_USE_FLAT_CONFIG=false
EXPOSE 9000
CMD ["npm", "run", "launch"]
