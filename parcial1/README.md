# Parcial 1 web


## Parte de login
Para esta primera parte hacemos uso de condicionales en el render que cambian con base a validaciones que se hacen en el forms de password y de email. Estos usan hooks
de estado para cambiar dinamicamente. En la parte de email la validación de reglas se hace al hacer click en siguiente y en la parte de password la validación es
dinamica. Una vez se hace click en la parte de password y se cumple con la regla de caracter se envia un json. En este caso no hacemos post debido al problema
con mockaroo por lo tanto los datos que se ingrensan al forms se concideran validos si cumplen con las reglas y se procede a generar el valor del dato role de manera
aletaroria ya que este parametro cambiara posteriormente la visulización del detalle de las cards.

![image](https://github.com/camilolcoder/parcial1Web/assets/78038782/01b3fe9a-079c-4fb3-9b3c-1468d7648459)

![image](https://github.com/camilolcoder/parcial1Web/assets/78038782/80e56111-f5b7-4763-a181-1f72ab423e41)

![image](https://github.com/camilolcoder/parcial1Web/assets/78038782/593eb35d-fc47-4065-a26f-5c93cabb21ca)

## Parte de lista

Para la parte de lista se hizo el fetch del json datos. Para esta parte creamos tres componentes. Parts, Part y PartsDetalle. Parts hace el fetch con useEffect y Part
obtiene información para las cartas por medio del props

![image](https://github.com/camilolcoder/parcial1Web/assets/78038782/40a338df-3dfa-413e-b33f-c3b98134af59)

## Parte detalle

Para realizar el detalle volvemos a realizar un fetch de los datos del json pero esta vez queremos realizar un filtro ya que nos interesa solo indentificar los datos
para la carta que se escogió. Para este filtro usando params obtenemos la id( en este caso modelo) y con esta realizamos el filtro. Una vez tenemos los datos para
ese modelo procedemos a poner los detalles pero con un condicional ya que si el valor de role para el usuario que hizo login es true, este tendra inputs en vez
de texto plano, mientras que si tiene false solo tendra texto plano

![image](https://github.com/camilolcoder/parcial1Web/assets/78038782/f4873c3b-ac5c-474d-a3ee-32defee6f9d2)

![image](https://github.com/camilolcoder/parcial1Web/assets/78038782/e563e9ff-b711-4702-b71b-f7530920240a)

## Internacionalización

Para esta parte se uso la librería de intl. Adicionalmente se creo la carpeta i18n en src para manejar messages y locales, messages son los mensajes asociados a un local.
Teniendo esto se configuró en App un boton en el cual haciendo uso de un hook cambia el idioma entre español e ingles.
