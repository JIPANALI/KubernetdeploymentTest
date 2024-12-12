




3. # Build the Docker image
docker build -t your-dockerhub-username/express-api:latest .

# Push the image to DockerHub (or any container registry)
docker push your-dockerhub-username/express-api:latest


4. helm create express-api
5.  helm package express-api
6.kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

7. kubectl port-forward svc/argocd-server -n argocd 8080:443
Login:
Username: admin
Password: kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d

8. argocd repo add https://your-github-username/your-repo --username <username> --password <token>
9. argocd app create express-api \
  --repo https://your-github-username/your-repo \
  --path express-api \
  --dest-server https://kubernetes.default.svc \
  --dest-namespace default \
  --sync-policy automated
