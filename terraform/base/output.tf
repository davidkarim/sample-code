output "vpc_id" {
  value = aws_vpc.main_vpc.id
}

output "cidr_block" {
  value = aws_vpc.main_vpc.cidr_block
}

output "public_subnets" {
  value = [aws_subnet.subnet_public_a.id, aws_subnet.subnet_public_b.id]
}

output "private_subnets" {
  value = [aws_subnet.subnet_private_a.id, aws_subnet.subnet_private_b.id]
}