# 1. Use official Node.js image
FROM node:18

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json/yarn.lock
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy all files
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Expose port 4009
EXPOSE 4009

# 8. Start the Next.js server on port 4009
CMD ["npm", "start", "--", "-p", "4009"]
