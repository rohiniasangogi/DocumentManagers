package com.Document.Assessment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Document.Assessment.model.File;
@Repository
public interface FileRepo extends JpaRepository<File,Integer>{

}
