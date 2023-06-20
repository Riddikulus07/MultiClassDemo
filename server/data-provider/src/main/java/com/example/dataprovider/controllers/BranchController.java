package com.example.dataprovider.controllers;


import com.example.dataprovider.exceptions.ResourceNotFoundException;
import com.example.dataprovider.models.Branch;
import com.example.dataprovider.repositories.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/data-provider/v1/branch")
@CrossOrigin
public class BranchController {
    @Autowired
    private BranchRepository branchRepository;

    @GetMapping
    private List<Branch> getAllBranches(){
        return branchRepository.findAll();
    }

    @PostMapping
    private Branch createBranch(@RequestBody Branch branch){
        return branchRepository.save(branch);
    }

    @PutMapping
    private Branch updateBranch(@RequestBody Branch branch){
        return branchRepository.save(branch);
    }

    @DeleteMapping("/{id}")
    private void deleteBranchById(@PathVariable long id){
        branchRepository.deleteById(id);
    }

    @GetMapping("/{id}")
    private Branch getBranchById(@PathVariable long id){
        Optional<Branch> branch  = branchRepository.findById(id);
        if(branch.isEmpty()){
            throw new ResourceNotFoundException("Invalid branch id");
        }
        return branch.get();
    }
}
