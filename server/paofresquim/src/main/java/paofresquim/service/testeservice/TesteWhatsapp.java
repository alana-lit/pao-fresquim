package br.com.paofresquim.service.testeservice;

import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

public class TesteWhatsapp {

    private static final String URL =
            "https://apps-evolution-api.ymqjmy.easypanel.host/message/sendText/Alyssson";

    private static final String API_KEY =
            "";

    public static void main(String[] args) {

        try {

            RestTemplate restTemplate = new RestTemplate();

            HttpHeaders headers = new HttpHeaders();

            headers.setContentType(MediaType.APPLICATION_JSON);

            headers.set("apikey", API_KEY);

            String body = """
                    {
                      "number": "5534996465826",
                      "text": "Teste enviado pela Evolution API"
                    }
                    """;

            HttpEntity<String> entity =
                    new HttpEntity<>(body, headers);

            ResponseEntity<String> response =
                    restTemplate.exchange(
                            URL,
                            HttpMethod.POST,
                            entity,
                            String.class
                    );

            System.out.println("STATUS: " + response.getStatusCode());
            System.out.println("BODY:");
            System.out.println(response.getBody());

        } catch (Exception e) {

            e.printStackTrace();
        }
    }
}