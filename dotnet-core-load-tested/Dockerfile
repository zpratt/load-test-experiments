FROM microsoft/dotnet:2.2-sdk-alpine AS builder

WORKDIR /app

COPY . ./

RUN dotnet restore
RUN dotnet publish -c Release -o out

#######################################

FROM microsoft/dotnet:2.2-aspnetcore-runtime-alpine
WORKDIR /app

COPY --from=builder /app/out ./
EXPOSE 8080
ENTRYPOINT ["dotnet", "dotnet-core-load-tested.dll"]
