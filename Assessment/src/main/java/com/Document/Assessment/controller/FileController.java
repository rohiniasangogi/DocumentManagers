package com.Document.Assessment.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Document.Assessment.model.File;
import com.Document.Assessment.repository.FileRepo;



@RestController
@CrossOrigin(origins="http://localhost:4200")
public class FileController {
	
	
		
		@Autowired
		private FileRepo file;
		
		@GetMapping("/getfile")
		public List<File> getfile(){
			return file.findAll();
		}
		
		@PostMapping("/addfile")
		public File addfile(@RequestBody File f) {
			return file.save(f);
		}
		
		@GetMapping("/getfilebyid/{id}")
		public Optional<File> getfilebyid(@PathVariable int id) {
			return file.findById(id);
		}
		
		@DeleteMapping("/delfile/{id}")
		
		public String deletefile(@PathVariable int id) {
			 file.deleteById(id);
			 return "deleted";
		}
		
		
		
//		@GetMapping("/download/{id}")
//		public File download(@PathVariable int id) {
//			return file.getById(id);
//		}
		
		
		@PutMapping("/updatefile/{id}")
		public File updatefile(@PathVariable int id,@RequestBody File f) {
			return file.save(f);
		}
}
