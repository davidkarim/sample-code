# Base Project Configuration

This is the terraform configuration to create a VPC, subnets, Internet Gateway, and Route Table. It is the base configuration because many other components are built on top of it.

Initialize terraform:

```bash
terraform init -backend-config=backend.properties
```

View the terraform plan:

```bash
terraform plan
```

Apply the terraform plan:

```bash
terraform apply
```
