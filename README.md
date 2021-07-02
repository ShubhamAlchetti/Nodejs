# NodeJs Server which uploads a file to S3 and scales it up using Kubernetes

The application takes AWS secret and access key from index.js file, by using this file it will create a S3 bucket and upload the file(image) to S3 bucket. This is achieved by dockerizing the application and deploying in Kubernetes.

**Pre-requisites:**

Should have an AWS account <br />
Need to generate AWSAccessKeyId and AWSSecretKey under IAM section. <br />

**Attributes:**

**KEY_ID:** Enter your AWSAccessKeyId <br /> 
**SECRET_KEY:** Enter your AWSSecretKey <br />
**BUCKET_NAME:** Add your bucket name to created. <br />
**AWS_Filename:** Name of the file to be uploaded. <br />

**Steps to run:**

1) install node (version v14.17.2) <br />
2) cd Nodejs <br />
3) node init <br />
4) node install <br />
5) make changes to the index.js file to add your secret and access key <br />
6) node index.js (to check whether the code runs locally) <br />
7) docker build -t nodeapp .  <br />
8) docker run nodeapp (to run the code via docker) <br />

**Deployment (used Kubernetes i.e., minikube with one node cluster)**

1) install minikube  <br />
2) minikube start (This will create a kubernetes 1 node cluster) <br />
3) eval $(minikube docker-env) <br /> 
4) kubectl create deployment nodeapp --image=nodeapplication:latest --image-pull-policy=Never <br />
   (This will create a deployment and the local docker image will be used instead of pulling a new image) <br />
5) kubectl get pods (new pod should be running) <br />
6) kubectl autoscale deployment nodeapp --cpu-percent=50 --min=1 --max=10 (To autoscale the pods whenever the cpu capacity reaches 50% and max 10 pods can be created) <br />

**Further Improvements:**

1) Add conditional loops while creating s3 bucket so it will not override the existing bucket. <br />
2) S3 buckets can be crearted by using terraform Infrastructure as code (IaC).<br />
