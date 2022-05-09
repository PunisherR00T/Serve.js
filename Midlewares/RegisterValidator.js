const { validationResult, body } = require("express-validator");

exports.registervalidation=[
    body('firstname',"Votre Prénom doit contenir au moins 3 charactéres").isLength({min : 3}),
    body('lastname',"Votre Nom doit contenir au moins 3 charactéres").isLength({min : 3}),
    body('email',"Veuillez saisir une adresse mail valide").isEmail(),
    body('password','Votre mot de passe doit contenir au moins 6 charactéres').isStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: false,
        pointsPerUnique: 1,
        pointsPerRepeat: 0.5,
        pointsForContainingLower: 10,
        pointsForContainingUpper: 10,
        pointsForContainingNumber: 10,
        pointsForContainingSymbol: 10,
      }),
    body('phone','Veuillez saisir un numéro de télephone valide').isLength({min : 8,max: 8}).isDecimal()
]

exports.loginvalidation=[
    body('email',"Veuillez saisir une adresse mail valide").isEmail(),
]

exports.updatevalidation=[
    body('phone','Veuillez saisir un numéro de télephone valide').isLength({min : 8,max: 8}).isDecimal()
]

exports.Validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}