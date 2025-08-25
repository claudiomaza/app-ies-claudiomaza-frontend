


// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Usamos el middleware por defecto de JSON Server
server.use(middlewares);

// Middleware para habilitar el cuerpo de la solicitud (request body)
server.use(jsonServer.bodyParser);

// Personaliza la ruta POST para simular la creación de una reserva
server.post('/api/reservations', (req, res, next) => {
  // Tomamos los datos enviados por el frontend
  const { activityId, paymentMethod } = req.body;

  // Creamos un objeto de respuesta simulado
  // Se genera un código de confirmación único
  const newReservation = {
    id: Date.now(), // Un ID único basado en el tiempo
    activityId,
    paymentMethod,
    confirmationCode: `CONF-${Math.floor(Math.random() * 100000)}`,
    status: 'pending', // Estado inicial
    createdAt: new Date().toISOString()
  };

  // En una implementación real, aquí se guardarían los datos en la base de datos.
  // Aquí, simplemente respondemos con los datos simulados.
  // Puedes agregarlo a db.json si quieres que sea "persistente" mientras el servidor corre.
  // router.db.get('reservations').push(newReservation).write();

  // Enviamos la respuesta simulada al frontend
  res.status(201).jsonp(newReservation);
});

// Usa el router por defecto de JSON Server para otras rutas (ej. /activities)
server.use('/api', router);

// Inicia el servidor en el puerto 3001
server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});