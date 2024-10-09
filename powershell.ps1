# Check if Az module is installed
if (-not (Get-Module -ListAvailable -Name Az)) {
    Write-Output "Az module not found. Installing..."
    Install-Module -Name Az -AllowClobber -Force
} else {
    Write-Output "Az module is already installed."
}

# Connect to Azure account
Connect-AzAccount

# Variables
$resourceGroupName = "example-resources"
$location = "West Europe"
$storageAccountName = "examplestorageacct"

# Create Resource Group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create Storage Account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName "Standard_LRS" `
                     -Kind "StorageV2"