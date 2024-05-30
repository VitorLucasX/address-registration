package com.vitor.api_adress.controller;

import com.vitor.api_adress.model.Endereco;
import com.vitor.api_adress.service.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enderecos")
public class EnderecoController {

    @Autowired
    private EnderecoService enderecoService;

    @GetMapping
    public List<Endereco> getAllEnderecos() {
        return enderecoService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Endereco> getEnderecoById(@PathVariable Long id) {
        Endereco endereco = enderecoService.findById(id);
        if (endereco != null) {
            return ResponseEntity.ok(endereco);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Endereco createEndereco(@RequestBody Endereco endereco) {
        return enderecoService.save(endereco);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Endereco> updateEndereco(@PathVariable Long id, @RequestBody Endereco enderecoDetails) {
        Endereco endereco = enderecoService.findById(id);
        if (endereco != null) {
            endereco.setTipo(enderecoDetails.getTipo());
            endereco.setNomePessoa(enderecoDetails.getNomePessoa());
            endereco.setTelefonePessoa(enderecoDetails.getTelefonePessoa());
            endereco.setPais(enderecoDetails.getPais());
            endereco.setEstado(enderecoDetails.getEstado());
            endereco.setCidade(enderecoDetails.getCidade());
            endereco.setRua(enderecoDetails.getRua());
            endereco.setNumero(enderecoDetails.getNumero());
            endereco.setCodigoPostal(enderecoDetails.getCodigoPostal());
            Endereco updatedEndereco = enderecoService.save(endereco);
            return ResponseEntity.ok(updatedEndereco);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEndereco(@PathVariable Long id) {
        Endereco endereco = enderecoService.findById(id);
        if (endereco != null) {
            enderecoService.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
