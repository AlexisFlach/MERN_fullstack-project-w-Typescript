## REST API

API står för Application Program Interface, vilket i sin enklaste
form är strukturerade requests och responses.

Man brukar beskriva det som ett kontrakt mellan en del av software som begär något från en
annan del av software.

En analogi som ofta används för att förklara API är ett restaurangbesök och du vill beställa något
att äta.

Servitören/servitrisen som tar beställningen från restaurangbesökaren är gränssnittet mellan besökaren och köket. Besökaren behöver inte veta hur beställningen implementeras.

```
app.post('/order', (req, res) => {
  const order = req.body;
  const meal = db.make(order);
  res.status(201).send(order);
})
```

När det kommer till Web APIs, vilket är det vi arbetar med, handlar det i stort om strukturerade requests och responses mellan client och server.

REST står I sin tur för REpresentional State Transfer.

- Architectural style for designing networked applications
- Relies on a stateless, client-server protocol, almost always HTTP
- Treats server objects as resources that can be created or destroyed
- Can be used by virtually any programming language
  (traversy media)

Allt inom REST handlar om resurser, vilka kan vara representerade som en HTML-sida, bilder eller annan dynamisk data.

Server ger access till dessa resurser och Client konsumerar dem. Varje resurs finns tillgänglig via dess URI.

#### Rest Constraints

###### Client-Server Architecture
En server ansvarar för att hantera resurser, och lyssnar efter request till dessa
services.

Vi får då seperation of concerns. Vi kan med andra ord ha client(frontend) i React/JavaScript som
ansvarar för det UI-relaterade och server/backend i C#/.NET som ansvarar för att hantera data.

###### Uniform Interface
Kommunikation mellan dessa komponenter ska vara enhetlig genom HTTP-metoder så som GET, POST, PUT ooch DELETE.

Denna constraint är i sin tur uppdelad i 4 principer:
1. Identifiering av resurs
2. Manipulation av resurs
3. Självbeskrivande meddelande
4. Hypermedia as the engine of application state(HATEOS)
   
###### Layered System
Mellan server och client ska det finnas lager av komponenter, så som Proxy och Gateway.
Vi använder detta för säkerhet, Caching, load balancing etc.
Dessa lager ska endast kommunicera med lager ovanför, eller under, dem själva.

###### Cache
Möjligheten att lagra data som ofta används.
Detta hjälper till att reducera trafik till servern.

###### Statelessness
State = Applikationens nuvarande tillstånd.
Förr i tiden var state lagrat i server side.
Så server ska inte lagra någon information om applikationens tillstånd, och när client begär
information från server så ska client inkludera all information som behövs för att server ska förstå
vad som ska skickas tillbaka, utan att använda sig av någon tidigare lagrad data.

###### Code on Demand
Teknologin som möjliggör för servern att skicka kod till klient som kan köras i client machine.

Dessa 6 contraints, som alltså är byggstenarna i en architectural style är vad som kallas för REST: Representational State Transfer


##### URI - Uniform Resource Identifier

URI är en string som unikt identifierar en resurs. 

URI:

```
example.com/posts/1
```

URL:
```
https://example.com/posts/1
```

###### Bästa praxis: URI Design
https://www.w3.org/2011/gld/wiki/223_Best_Practices_URI_Construction
https://css-tricks.com/guidelines-for-uri-design/
https://blog.restcase.com/7-rules-for-rest-api-uri-design/
https://www.interviewbit.com/rest-api-interview-questions/

- Använd plural substantiv för att definiera en resurs

```
/users/1
```

- Använd endast små bokstäver

- REST använder sig utav HTTP-metoder. Det är inte rekomenderat att ha med den informationen i URI.

Nej
```
/getusers
```

Ja
```
/users/{id}
````

###### Bästa praxis när det kommer till att utveckla RESTful web services

- Använd JSON. De flesta teknologier har inbyggt support för att arbeta med JSON.

**Server**

Med express kan vi antingen använda oss av

```
res.json()
```

eller 

```
res.send({})
```

**client**

Om vi skickar med ett objekt som andra parameter i axios.post() så serialiser axios automatiskt det till JSON.

```
axios.post(URL, {user: 1})
```

vilket är samma sak som:

```
axios.post(URL, {user: 1}, 
{
  headers: {
    'content-type': 'application/json'
  }
})
```











