docker run -it --rm \
-v ${PWD}:/app \
-v /app/node_modules \
-p 3001:3002 \
-e CHOKIDAR_USEPOLLING=true \
test-aos:dev
