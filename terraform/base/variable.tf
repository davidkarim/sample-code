variable "project_name" {
    type        = string
    default     = "default-project"
}

variable "aws_region" {
    type        = string
    default     = "us-east-1"
}

variable "availability_zone_1" {
    type        = string
    default     = "us-east-1b"
}

variable "availability_zone_2" {
    type        = string
    default     = "us-east-1c"
}

variable "vpc_cidr" {}
variable "subnet_public_a_cidr" {}
variable "subnet_public_b_cidr" {}
variable "subnet_private_a_cidr" {}
variable "subnet_private_b_cidr" {}