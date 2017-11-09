package com.blogProject.controller;

import com.blogProject.dao.BlogRepository;
import com.blogProject.dao.UserRepository;
import com.blogProject.model.BlogEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class BlogService {
  @Autowired
  BlogRepository blogRepository;

  @Autowired
  UserRepository userRepository;

  @RequestMapping(value = "/api/blogs", method = RequestMethod.GET)
  public @ResponseBody List<BlogEntity> showBlogs() {
    List<BlogEntity> blogList = blogRepository.findAll();
    return blogList;
  }

  @RequestMapping(value = "/api/blogs/add", method = RequestMethod.POST)
  public @ResponseBody BlogMessage addBlogPost(@RequestBody BlogEntity blogEntity) {
    blogRepository.saveAndFlush(blogEntity);
    BlogMessage blogMessage = new BlogMessage();
    blogMessage.setMessage("success");
    return blogMessage;
  }

  @RequestMapping(value = "/api/blogQuery/{id}", method = RequestMethod.GET)
  public @ResponseBody List<BlogEntity> findBlogsByUserId(@PathVariable("id") int id) {
    List<BlogEntity> blogs = blogRepository.findBlogById(id);
    return blogs;
  }

  @RequestMapping(value = "/api/blogs/{id}", method = RequestMethod.GET)
  public @ResponseBody BlogEntity showBlog(@PathVariable("id") int id) {
    BlogEntity blog = blogRepository.findOne(id);
    return blog;
  }

  @RequestMapping(value = "/api/blogUpdate", method = RequestMethod.PUT)
  public @ResponseBody BlogMessage updateBlog(@RequestBody BlogEntity blogEntity) {
    blogRepository.updateBlog(blogEntity.getTitle(), blogEntity.getUserId(),
            blogEntity.getContent(), blogEntity.getPubDate(), blogEntity.getId());
    blogRepository.flush();
    BlogMessage blogMessage = new BlogMessage();
    blogMessage.setMessage("success");
    return blogMessage;
  }

  @RequestMapping(value = "/api/blogDelete/{id}", method = RequestMethod.DELETE)
  public @ResponseBody BlogMessage deleteBlog(@PathVariable("id") int id) {
    blogRepository.delete(id);
    blogRepository.flush();
    BlogMessage blogMessage = new BlogMessage();
    blogMessage.setMessage("success");
    return blogMessage;
  }
}
