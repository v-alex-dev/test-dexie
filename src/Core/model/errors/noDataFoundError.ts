export class NoDataFoundError extends Error {
    constructor(dataType?: string) {
        super(dataType ? `La donnée de type ${dataType} n'a pas été trouvé.` : `Donnée non trouvé`) 
        //appelle le constructeur au dessus. Obliger d'utiliser super() quand utilise extends.
    }
}