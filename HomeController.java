package Fsadproject;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin(origins = "*")
public class HomeController {

    @GetMapping("/apps")
    public List<Map<String, String>> getApps() {

        List<Map<String, String>> apps = new ArrayList<>();

        Map<String, String> app1 = new HashMap<>();
        app1.put("name", "AI Image Generator");
        app1.put("desc", "Generate images using AI");
        app1.put("img", "https://via.placeholder.com/150");

        Map<String, String> app2 = new HashMap<>();
        app2.put("name", "Chat Bot");
        app2.put("desc", "Talk with AI assistant");
        app2.put("img", "https://via.placeholder.com/150");

        apps.add(app1);
        apps.add(app2);

        return apps;
    }
}
