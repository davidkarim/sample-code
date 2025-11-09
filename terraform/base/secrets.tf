# Storage of VPC parameters in AWS Secrets Manager
# This can be helpful for sharing VPC info with other Terraform projects
resource "aws_secretsmanager_secret" "vpc_params" {
  name                      = "${var.project_name}.vpc_params"
  recovery_window_in_days   = 0
}

resource "aws_secretsmanager_secret_version" "vpc_params" {
  secret_id     = aws_secretsmanager_secret.vpc_params.id
  secret_string = jsonencode({
    vpc_id           = aws_vpc.main_vpc.id,
    cidr_block       = aws_vpc.main_vpc.cidr_block,
    subnet_private_a = aws_subnet.subnet_private_a.id,
    subnet_private_b = aws_subnet.subnet_private_b.id,
    subnet_public_a  = aws_subnet.subnet_public_a.id,
    subnet_public_b  = aws_subnet.subnet_public_b.id
  })
}