package Grupo13.LabDistri_.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import Grupo13.LabDistri_.Model.Response;

public interface ResponseRepo 
    extends MongoRepository<Response,Integer>{
}
