@app
begin-app

@static
folder build

@http
get /api
post /contact
post /sign

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
