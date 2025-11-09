# Create a VPC
resource "aws_vpc" "main_vpc" {
  cidr_block = var.vpc_cidr
  tags = {
    Name = "${var.project_name}-vpc"
    Terraform = "true"
    Application = "${var.project_name}"
  }
}

resource "aws_subnet" "subnet_public_a" {
  vpc_id     = aws_vpc.main_vpc.id
  cidr_block = var.subnet_public_a_cidr
  availability_zone = var.availability_zone_1

  tags = {
    Name = join(" ", [title("${var.project_name}"), "public subnet A"])
    Terraform = "true"
    Application = "${var.project_name}"
  }
}

resource "aws_subnet" "subnet_public_b" {
  vpc_id     = aws_vpc.main_vpc.id
  cidr_block = var.subnet_public_b_cidr
  availability_zone = var.availability_zone_2

  tags = {
    Name = join(" ", [title("${var.project_name}"), "public subnet B"])
    Terraform = "true"
    Application = "${var.project_name}"
  }
}

resource "aws_subnet" "subnet_private_a" {
  vpc_id     = aws_vpc.main_vpc.id
  cidr_block = var.subnet_private_a_cidr
  availability_zone = var.availability_zone_1

  tags = {
    Name = join(" ", [title("${var.project_name}"), "private subnet A"])
    Terraform = "true"
    Application = "${var.project_name}"
  }
}

resource "aws_subnet" "subnet_private_b" {
  vpc_id     = aws_vpc.main_vpc.id
  cidr_block = var.subnet_private_b_cidr
  availability_zone = var.availability_zone_2

  tags = {
    Name = join(" ", [title("${var.project_name}"), "private subnet B"])
    Terraform = "true"
    Application = "${var.project_name}"
  }
}

# # Create an Internet Gateway
resource "aws_internet_gateway" "main_igw" {
  vpc_id = aws_vpc.main_vpc.id

  tags = {
    Name = join(" ", [title("${var.project_name}"), "IGW"])
    Terraform = "true"
    Application = "${var.project_name}"
  }
}

# Create a Route Table
resource "aws_route_table" "main_route_table" {
  vpc_id = aws_vpc.main_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main_igw.id
  }
  tags = {
    Name = join(" ", [title("${var.project_name}"), "Public Route Table"])
    Terraform = "true"
    Application = "${var.project_name}"
  }
}

# # Associate the Public Subnet with the Route Table
resource "aws_route_table_association" "public_subnet_association_1" {
  subnet_id      = aws_subnet.subnet_public_a.id
  route_table_id = aws_route_table.main_route_table.id
}

resource "aws_route_table_association" "public_subnet_association_2" {
  subnet_id      = aws_subnet.subnet_public_b.id
  route_table_id = aws_route_table.main_route_table.id
}