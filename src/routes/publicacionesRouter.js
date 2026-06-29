router.post(
    "/",
    authMiddleware,
    validarPublicacion,
    publicacionesController.crearPublicacion
);