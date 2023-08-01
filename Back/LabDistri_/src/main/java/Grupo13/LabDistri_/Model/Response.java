package Grupo13.LabDistri_.Model;

// Importing required classes
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

// Annotations
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "API.Sentry")

// Class
public class Response
{

	// Attributes
	@Id private String _id;
    private float ps_max;
    private float h;
    private float diameter;
    private String fullname;
    private String id;
    private float v_inf;
    private String last_obs_jd;
    private int n_imp;
    private String ip;

    private String last_obs;
    private float ps_cum;
    private String des;
    private String ts_max;
    private String range;
}
