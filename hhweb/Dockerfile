# The image of hhweb (hernihistorie.cz).  Build it from the repository root, since hhweb is an
# npm workspace of haweb and shares haweb's src/lib:
#
#     docker build -f hhweb/Dockerfile -t hhweb .

FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY hhweb/package.json hhweb/
RUN --mount=type=cache,target=/root/.npm npm ci
# haweb's package.json above resolves its `#lib/...` imports to this
COPY src/lib src/lib/
COPY hhweb hhweb/
RUN npm run build -w hhweb

# adapter-node bundles every dependency of hhweb (all of them are devDependencies), so the
# build runs without node_modules
FROM node:22-alpine
WORKDIR /app
COPY hhweb/package.json .
COPY --from=builder /app/hhweb/build build/
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]
