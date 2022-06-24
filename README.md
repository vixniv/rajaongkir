# Rajaongkir
Use Rajaongkir API directly from your frontend app.

## Usage
> DISCLAIMER: This is a starter account for education purpose, you DON'T need to pass API KEY.

The URL and the parameter to make a request are the same from [Rajaongkir API](https://rajaongkir.com/dokumentasi/starter), except the method to get the cost (ongkir).

### Province
```bash
https://rajaongkir.vercel.app/province
```

| Method        | Parameter     |
| ------------- |-------------  |
| GET           | -             |

### City
```bash
https://rajaongkir.vercel.app/city
```

| Method        | Parameter     |
| ------------- |-------------  |
| GET           | province      |

### Cost
```bash
https://rajaongkir.vercel.app/cost
```

| Method        | Parameter     |
| ------------- |-------------  |
| GET           | origin        |
| GET           | destination   |
| GET           | weight        |
| GET           | courier       |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)