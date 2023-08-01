package Grupo13.LabDistri_.Controller;

import Grupo13.LabDistri_.Model.Response;
import Grupo13.LabDistri_.Repository.ResponseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
 
import java.util.List;
 
// Annotation
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
// Class
public class ResponseController {
 
    @Autowired
    private ResponseRepo responseRepo;
 
    @PostMapping("/addResponse")
    public String saveResponse(@RequestBody Response response){
        responseRepo.save(response);
       
        return "Added Successfully";
    }
 
    @GetMapping("/responses")
    public List<Response> getResponses() {
       
        return responseRepo.findAll();
    }
 
    @DeleteMapping("/delete/{id}")
    public String deleteResponse(@PathVariable int id){
        responseRepo.deleteById(id);
       
        return "Deleted Successfully";
    }
 
}